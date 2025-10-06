import gsap from "gsap";
import type { Ref } from "vue";

export const heroSectionAnimation = () => {
  const animateOnView = (
    titleRef: Ref<HTMLElement | null>,
    bodyTextref: Ref<HTMLElement | null>,
    btnRef: Ref<HTMLElement | null>,
    card1Ref: Ref<HTMLElement | null>,
    card2Ref: Ref<HTMLElement | null>,
    card3Ref: Ref<HTMLElement | null>,
    card4Ref: Ref<HTMLElement | null>,
  ) => {
    let tl = gsap.timeline({
      onComplete: () => {
        onScrollAnim();
      },
    });
    tl.from(titleRef.value, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
    tl.from(
      bodyTextref.value,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 1,
        ease: "power2.out",
      },
      "<0.2",
    );
    tl.from(
      btnRef.value,
      { opacity: 0, y: 50, scale: 0.6, duration: 1, ease: "power2.out" },
      "<0.2",
    );
    tl.from(
      ".dashboard-img",
      {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "<0.2",
    );

    tl.from(
      [card1Ref.value, card2Ref.value, card3Ref.value, card4Ref.value],
      {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)", // ✨ Le meilleur bounce
        stagger: 0.1,
      },
      "<0.4",
    );
  };
  function onScrollAnim() {
    gsap.to(".dashboard-img", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      scale: 0.4,
      y: -250,
      opacity: 0.2,
      force3D: true,
      ease: "none",
    });
  }
  return {
    animateOnView,
  };
};
