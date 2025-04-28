
export type FooterProps = {
    className?: string;
}

export const Footer = ({className}: FooterProps): React.ReactElement => {
    return (
        <footer className={`footer ${className}`}>
           <p className="footer__copyright">&copy; 2025 Copyright</p>
        </footer>
    )

}