import { Account, Bag, Category, FoodService, Home } from "../assets/images";

const getIcons = (key) => {
    switch (key) {
        case 'Home':
            return Home
        case 'Bag':
            return Bag
        case 'Account':
            return Account
        // case 'Category':
        case 'PhotoShootHome':
            return Category
        default:
        case 'FoodService':
            return FoodService
    }
}

const convertValues = (val = '') => Number.parseFloat(val + '').toFixed(2);
export { getIcons, convertValues }