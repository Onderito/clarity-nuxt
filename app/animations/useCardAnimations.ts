import gsap from "gsap";
import type { Ref } from "vue";

export const useCardAnimations = () => {
  const animateOnScroll = (
    titleRef: Ref<HTMLElement | null>,
    bodyRef: Ref<HTMLElement | null>,
  ) => {
    const cardsElements = gsap.utils.toArray<HTMLElement>(".card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.value,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.from(titleRef.value, {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      ease: "power2.out",
    });

    tl.from(
      bodyRef.value,
      {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: "power2.out",
      },
      "<0.2",
    );

    tl.from(cardsElements, {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });

    return cardsElements;
  };

  const setupHoverAnimations = (cardsElements: HTMLElement[]) => {
    cardsElements.forEach((card, index) => {
      const cardImage = card.querySelector(".cardImg");
      const cardTitle = card.querySelector(".cardTitle");
      const cardDesc = card.querySelector(".cardDesc");

      const tl = gsap.timeline({ paused: true });

      tl.to(card, {
        boxShadow: "0 15px 40px rgba(88, 91, 255, 0.1)",
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          cardTitle,
          {
            scale: 1.1,
            duration: 0.3,
            y: 10,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          cardDesc,
          {
            scale: 1.1,
            duration: 0.3,
            y: 10,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          cardImage,
          {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
          },
          "<",
        );

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });
  };

  return {
    animateOnScroll,
    setupHoverAnimations,
  };
};
