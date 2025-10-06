<script lang="ts" setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { heroSectionAnimation } from "~/animations/heroSectionAnimation";
const titleRef = ref(null);
const bodyTextRef = ref(null);
const btnRef = ref(null);
const card1Ref = ref(null);
const card2Ref = ref(null);
const card3Ref = ref(null);
const card4Ref = ref(null);

const { animateOnView } = heroSectionAnimation();

onMounted(() => {
    const animateHero = animateOnView(
        titleRef,
        bodyTextRef,
        btnRef,
        card1Ref,
        card2Ref,
        card3Ref,
        card4Ref,
    );
});
</script>

<template>
    <div class="relative trigger">
        <h1 ref="titleRef" class="heading-1 title text-center font-inter">
            Stay focused, <br />
            stay kind to
            <span class="font-gloria font-light">yourself</span>
        </h1>
        <p ref="bodyTextRef" class="body-text text-center xl:mt-6 mt-2">
            A daily planner that helps you build habits, track progress, and
            rest when you need to
        </p>
        <button
            ref="btnRef"
            class="h-[52px] xl:mt-8 mt-4 bg-[#585BFF] mx-auto flex items-center justify-center p-2 w-52 rounded-2xl text-white font-inter font-bold shadow-md border-4 border-white cursor-pointer hover:bg-[#585BFF]/90 transition-none duration-300"
        >
            Start For Free
        </button>
        <div
            ref="card1Ref"
            class="absolute top-0 xl:left-40 left-0 rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria xl:text-[24px] text-[16px] flex text-center items-center justify-center"
        >
            30
        </div>
        <div
            ref="card2Ref"
            class="absolute md:top-65 top-40 xl:left-60 left-0 rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"
        >
            <NuxtImg
                src="/images/ellipse.svg"
                alt="ellipse"
                width="24"
                height="24"
                class="xl:w-[36px] xl:h-[36px] shadow-sm rounded-full"
            />
        </div>
        <div
            ref="card3Ref"
            class="absolute top-0 xl:right-40 right-0 -rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"
        >
            <NuxtImg
                src="/images/line.svg"
                alt="line"
                width="24"
                height="24"
                class="xl:w-[36px] xl:h-[36px]"
            />
        </div>
        <div
            ref="card4Ref"
            class="absolute md:top-65 top-40 xl:right-60 right-0 -rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"
        >
            <NuxtImg
                src="/images/stop.svg"
                alt="stop"
                width="10"
                height="10"
                class="xl:w-[21px] xl:h-[27px]"
            />
        </div>
        <NuxtImg
            src="/images/dashboard-screen.jpg"
            alt="dashboard screen"
            class="relative dashboard-img bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-auto mt-14 xl:mt-24"
            format="webp"
            loading="eager"
        />
    </div>
</template>
