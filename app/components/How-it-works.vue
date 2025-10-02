<script lang="ts" setup>
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
        <h2 class="heading-2 font-inter text-center">How It Works</h2>
        <p class="font-inter text-center body-text">
            A simple flow to stay productive without pressure
        </p>
        <div class="card-wrapper">
            <div v-for="(card, i) in cards" :key="i" class="card">
                <img
                    :src="card.image"
                    alt="Card Image"
                    class="mx-auto w-12 h-12"
                />
                <h3 class="font-inter text-center heading-3">
                    {{ card.title }}
                </h3>
                <p class="font-inter text-center body-text">
                    {{ card.description }}
                </p>
            </div>
        </div>
    </div>
</template>
