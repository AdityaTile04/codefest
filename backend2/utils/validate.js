const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validateNeedItems = (items) => {
    if (!Array.isArray(items) || items.length === 0) return false;
    return items.every((item) => item.itemName && item.quantity && typeof item.quantity === "string");
};

module.exports = { validateEmail, validateNeedItems };