import type { useGeneratorStore } from '~/stores/generator-store'
import type { useLetterGeneratorStore } from '~/stores/letter-generator-store'

export async function downloadPDF(
  generatorStore: ReturnType<typeof useGeneratorStore>,
  letterStore: ReturnType<typeof useLetterGeneratorStore>
): Promise<void> {
  try {
    // Import jsPDF and html2canvas dynamically
    const { default: jsPDF } = await import('jspdf')
    const html2canvas = await import('html2canvas')
    
    // Get company and user data from store
    const companyData = generatorStore.companyData
    const userData = generatorStore.userData
    const contractType = generatorStore.contractType
    
    // Create a temporary container for the PDF content
    const pdfContainer = document.createElement('div')
    pdfContainer.style.position = 'absolute'
    pdfContainer.style.left = '-9999px'
    pdfContainer.style.top = '0'
    pdfContainer.style.width = '800px'
    pdfContainer.style.backgroundColor = 'white'
    pdfContainer.style.padding = '60px 80px'
    pdfContainer.style.fontFamily = 'Arial, sans-serif'
    pdfContainer.style.fontSize = '12px'
    pdfContainer.style.lineHeight = '1.5'
    
    // Create PDF content in letter format using store data
    pdfContainer.innerHTML = `
      <div style="margin-bottom: 50px;">
        <!-- Header with sender address on the right -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px;">
          <!-- Left side - empty for now -->
          <div style="width: 40%;"></div>
          
          <!-- Right side - sender address -->
          <div style="width: 60%; text-align: right; font-size: 12px; line-height: 1.4;">
            <div style="font-weight: bold; margin-bottom: 5px;">${userData?.fullName}</div>
            <div>${userData?.street}</div>
            <div>${userData?.postalCode} ${userData?.city}</div>
            ${userData?.email ? `<div style="margin-top: 5px;">${userData.email}</div>` : ''}
          </div>
        </div>
        
        <!-- Company address -->
        <div style="margin-bottom: 40px;">
          <div style="font-size: 12px; line-height: 1.4;">
            <div style="font-weight: bold; margin-bottom: 5px;">${companyData?.name}</div>
            <div>${companyData?.street}</div>
            <div>${companyData?.postalCode} ${companyData?.city}</div>
            ${companyData?.email ? `<div style="margin-top: 5px;">E-Mail: ${companyData.email}</div>` : ''}
          </div>
        </div>
        
        <!-- Date and city on the same line as subject -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
          <!-- Left side - subject -->
          <div style="width: 60%;">
            <div style="font-weight: bold; font-size: 12px; margin-bottom: 5px;">Betreff: ${letterStore.subject}</div>
          </div>
          
          
          <!-- Right side - date and city in one line -->
          <div style="width: 40%; text-align: right; font-size: 12px;">
            <div>${userData?.city ? userData?.city + ', ': ''}${new Date().toLocaleDateString('de-DE', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            }).replace(/(\d+)\.(\d+)\.(\d+)/, '$1.$2.$3')}</div>
          </div>
        </div>
      </div>
      
      <!-- Letter content -->
      <div style="font-size: 12px; line-height: 1.6; margin-bottom: 40px; white-space: pre-line;">
        ${letterStore.body}
      </div>
    `
    
    // Add to DOM temporarily
    document.body.appendChild(pdfContainer)
    
    // Convert to canvas
    const canvas = await html2canvas.default(pdfContainer, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    })
    
    // Remove temporary container
    document.body.removeChild(pdfContainer)
    
    // Create PDF
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = pdfWidth
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    
    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
    
    // If content is longer than one page, add new pages
    let heightLeft = imgHeight
    let position = 0
    
    while (heightLeft >= pdfHeight) {
      position = heightLeft - pdfHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight)
      heightLeft -= pdfHeight
    }
    
    // Download PDF
    const fileName = `kuendigungsschreiben_${new Date().toISOString().split('T')[0]}.pdf`
    pdf.save(fileName)
    
    console.log('PDF erfolgreich heruntergeladen')
  } catch (error) {
    console.error('Fehler beim PDF-Download:', error)
    throw new Error('Fehler beim PDF-Download. Bitte versuchen Sie es erneut.')
  }
} 