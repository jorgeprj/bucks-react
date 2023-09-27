export const formatDate = (date: string) => {
    const formattedDate = new Date(date);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = formattedDate.getDate();
    const month = months[formattedDate.getMonth()];
    const year = formattedDate.getFullYear();

    return `${day} ${month} ${year}`;
}