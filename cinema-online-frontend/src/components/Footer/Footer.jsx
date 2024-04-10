export default function Footer() {
    const year = new Date().getUTCFullYear()

    return (
        <div className="footer-container">
            <footer className="text-white p-4 text-center">
                <p>Copyright © {year}</p>
            </footer>
        </div>
    );
}