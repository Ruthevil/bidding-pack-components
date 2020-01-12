import cardPerson from "./card-person";

const components = {
    install(Vue, potions) {
        Vue.component('biddingCardPerson', cardPerson);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(components);
}
export default components