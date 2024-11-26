export const getCurrentTime = (): string => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes} ${ampm}`;
};

export const getCurrentDateFormatted = () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const ordinalSuffix = (n: number) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const value = n % 100;
        return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
    };

    const formattedDay = `${day}${ordinalSuffix(day)}`;
    return `${formattedDay} ${month}, ${year}`;
};

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getUTCFullYear();

    const ordinalSuffix = (n: number) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const value = n % 100;
        return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
    };

    const formattedDay = `${day}${ordinalSuffix(day)}`;
    return `${formattedDay} ${month}, ${year}`;
};

export const formatTime = (dateString: string) => {
    const date = new Date(dateString);

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${hours}:${formattedMinutes} ${period}`;
};
