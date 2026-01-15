#!/usr/bin/env python3
import subprocess
import sys

try:
    # Try using pdftotext via subprocess
    result = subprocess.run(['pdftotext', 'public/Jason_Xu.pdf', '-'], 
                          capture_output=True, text=True)
    if result.returncode == 0:
        print(result.stdout)
    else:
        print("pdftotext failed, trying alternative method", file=sys.stderr)
        raise Exception("pdftotext not available")
except:
    try:
        # Try PyPDF2
        import PyPDF2
        with open('public/Jason_Xu.pdf', 'rb') as pdf_file:
            pdf_reader = PyPDF2.PdfReader(pdf_file)
            text = ''
            for page in pdf_reader.pages:
                text += page.extract_text()
            print(text)
    except ImportError:
        try:
            # Try pypdf
            import pypdf
            with open('public/Jason_Xu.pdf', 'rb') as pdf_file:
                pdf_reader = pypdf.PdfReader(pdf_file)
                text = ''
                for page in pdf_reader.pages:
                    text += page.extract_text()
                print(text)
        except ImportError:
            try:
                # Try pdfminer
                from pdfminer.high_level import extract_text
                text = extract_text('public/Jason_Xu.pdf')
                print(text)
            except ImportError:
                print("ERROR: No PDF reading library available. Please install one of:")
                print("  - poppler-utils (for pdftotext)")
                print("  - pip install PyPDF2")
                print("  - pip install pypdf")
                print("  - pip install pdfminer.six")
                sys.exit(1)
