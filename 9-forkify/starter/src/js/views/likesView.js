import { elements } from './base';

export const toggleLikeBtn = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`) // element1 element2 => Selects element2 where the parent is element1
    // icons.svg#icon-heart-outlined
};

export const toggleLikeMenu = numLikes => {
    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};