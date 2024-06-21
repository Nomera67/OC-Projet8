import './CopyEmailButton.scss';

interface CopyEmailButtonProps {
  email: string;
}

const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({ email }) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            alert('Adresse e-mail copiée dans le presse-papiers !');
        } catch (err) {
            console.error('Erreur lors de la copie de l\'adresse e-mail : ', err);
        }
    };

    return (
        <div className="email__container">
            <address className="email__address">{email}</address>
            <button className="email__button" onClick={copyToClipboard}>Cliquez pour copier</button>
        </div>
    );
};

export default CopyEmailButton;
