'use client'

export default function ContactButton() {
  return (
    <a 
      href="https://contact.jasonxu.me" 
      target="_blank"
      rel="noopener noreferrer"
      className="contact-button"
      style={{
        fontFamily: 'var(--font-playfair), serif',
        fontWeight: 300,
        color: '#333',
        fontSize: '1.3em',
        marginTop: '40px',
        marginBottom: '40px',
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'transform 0.2s ease',
        transformOrigin: 'center'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
      }}
    >
      Interested? Inspired?
    </a>
  )
}
