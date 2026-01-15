import { readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'
import { writeFileSync, unlinkSync } from 'fs'

const execAsync = promisify(exec)

export async function GET() {
  try {
    // Read the resume.tex file
    const texPath = join(process.cwd(), 'public', 'resume.tex')
    const texContent = readFileSync(texPath, 'utf-8')
    
    // Create a temporary file for compilation
    const tempDir = '/tmp'
    const tempTexPath = join(tempDir, 'resume_temp.tex')
    const tempPdfPath = join(tempDir, 'resume_temp.pdf')
    
    // Write the tex content to temp file
    writeFileSync(tempTexPath, texContent)
    
    // Compile LaTeX to PDF using pdflatex
    await execAsync(`pdflatex -interaction=nonstopmode -output-directory=${tempDir} ${tempTexPath}`)
    
    // Read the compiled PDF
    const pdfBuffer = readFileSync(tempPdfPath)
    
    // Clean up temp files
    unlinkSync(tempTexPath)
    unlinkSync(tempPdfPath)
    // Also clean up aux files that pdflatex creates
    try {
      unlinkSync(join(tempDir, 'resume_temp.aux'))
      unlinkSync(join(tempDir, 'resume_temp.log'))
      unlinkSync(join(tempDir, 'resume_temp.out'))
    } catch {
      // Ignore cleanup errors
    }
    
    // Return the PDF
    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    })
  } catch (error) {
    console.error('Error compiling resume:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to compile resume' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
