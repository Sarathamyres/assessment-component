
# Frontend Mentor - Interactive rating component solution

### Screenshot

![](./screenshot/Captura%20de%20Tela%20(114).png)
![](./screenshot/Captura%20de%20Tela%20(116).png)
![](./screenshot/Captura%20de%20Tela%20(117).png)


## My process

### Built with

- HTML5 
- CSS custom properties
- Flexbox
- javaScript

### What I learned

Whith this is project, I learned basic concepts of JavaScript. I was proud to have managed to use JS, even if I did it together with the Thomas Sankara channel. I learned how to register an event listener. So the part of the code I'm most proud of is:

```JS
buttonSubmit.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  mainContainer.style.display = "none";
});
buttonRateAgain.addEventListener("click", () => {
  thankYou.classList.add("hidden");
  mainContainer.style.display = "block";
});
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```
I also understood how to make containers responsive without using media queries. In this case, I only needed to put a max-width in the containers. This was satisfactory.

### Continued development

I intend to continue developing my JS skills and improve my ability to make a project responsive.

### Useful resources

- [Example resource 1](https://www.youtube.com/@tsbsankara) - I loved the channel. helped me a lot.

## Author
- Frontend Mentor - [@Sarathamyres](https://www.frontendmentor.io/profile/Sarathamyres)
- GitHub - [Sarathamyres](https://github.com/Sarathamyres)

## Acknowledgments

Once again, my credits go to the you tube channel https://www.youtube.com/@tsbsankara which helped me understand a little JS.
