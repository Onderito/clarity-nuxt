<script lang="ts" setup>
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCardAnimations } from "~/animations/useCardAnimations";

gsap.registerPlugin(ScrollTrigger);

const titleRef = ref(null);
const bodyRef = ref(null);

const { animateOnScroll, setupHoverAnimations } = useCardAnimations();

onMounted(() => {
    const cardsElements = animateOnScroll(titleRef, bodyRef);
    setupHoverAnimations(cardsElements);
});

const cards = ref([
    {
        title: "Add your 3 tasks",
        description:
            "Stay focused by choosing your top 3 priorities for the day.",
        image: "/images/notes.svg",
    },
    {
        title: "See your progress",
        description: "Follow your completion rate without stress or guilt.",
        image: "/images/thunder.svg",
    },
    {
        title: "Pause when needed",
        description:
            "Activate Day Off or take a quick break with calming music.",
        image: "/images/pause.svg",
    },
]);
</script>

<template>
    <div class="container">
        <h2 ref="titleRef" class="heading-2 font-inter text-center">
            How It Works
        </h2>
        <p ref="bodyRef" class="font-inter text-center body-text">
            A simple flow to stay productive without pressure
        </p>

        <div class="min-h-screen mt-6 xl:mt-8 pb-12">
            <div class="mx-auto px-5 xl:flex xl:gap-10">
                <div
                    v-for="(card, i) in cards"
                    :key="i"
                    class="w-full mb-12 last:mb-0"
                >
                    <div
                        class="card w-full h-[300px] rounded-xl bg-white border-[0.5px] border-[#E2E6EC] flex flex-col justify-center items-center relative overflow-hidden p-8"
                    >
                        <img
                            :src="card.image"
                            alt=""
                            class="w-14 cardImg h-14 mb-4 relative z-10"
                        />
                        <h3
                            class="heading-3 cardTitle font-bold mb-2 text-center relative z-10"
                        >
                            {{ card.title }}
                        </h3>
                        <p class="card-text cardDesc text-center relative z-10">
                            {{ card.description }}
                        </p>

                        <!-- Blob -->
                        <div
                            class="absolute -top-12 -left-12 w-[250px] h-[250px] rounded-full bg-[#C9CAFE]/50 blur-[60px]"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
