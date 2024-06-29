export const fetchPackageAction = async () => {
    try {
        const response = await fetch('https://registry.npmjs.org/react-chessboard-ui/latest');
        const { version } = await response.json();
        return version;
    } catch(error) {
        console.error(error);
        return '0.0.0';
    }
};
