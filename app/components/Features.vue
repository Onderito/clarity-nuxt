<script lang="ts">
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>

<template>
    <div>
        <h2 class="heading-2 font-inter text-center">Features</h2>
        <div
            class="mx-auto flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 px-5 mt-8"
        >
            <div class="border-[0.5px] border-[#E2E6EC] rounded-3xl w-full p-4">
                <h3 class="font-inter text-[#C8CCD2] font-bold text-[16px]">
                    STEP ONE
                </h3>
                <h4 class="heading-3 font-inter mt-1">Smart to-do</h4>
                <ul
                    class="mt-8 card-text font-inter text-[14px] flex flex-col gap-2"
                >
                    <li class="flex gap-2">
                        <NuxtImg
                            src="/images/check.svg"
                            alt="Checkmark"
                            width="24"
                            height="24"
                        />
                        Finish your portfolio
                    </li>
                    <li class="flex gap-2">
                        <NuxtImg
                            src="/images/check.svg"
                            alt="Checkmark"
                            width="24"
                            height="24"
                        />to do list app
                    </li>
                    <li class="flex gap-2">
                        <NuxtImg
                            src="/images/uncheck.svg"
                            alt="Checkmark"
                            width="24"
                            height="24"
                        />Go to the gym !
                    </li>
                </ul>
                <button
                    class="text-[16px] bg-[#585BFF] rounded-xl p-2 px-6 font-medium text-white font-inter mx-auto flex mt-12 purple-glow"
                >
                    Add task
                </button>
            </div>
            <div class="border-[0.5px] border-[#E2E6EC] rounded-3xl w-full p-4">
                <h3 class="font-inter text-[#C8CCD2] font-bold text-[16px]">
                    STEP TWO
                </h3>
                <h4 class="heading-3 font-inter mt-1">Daily journal</h4>

                <div
                    class="w-44 h-44 bg-[#585BFF]/50 mx-auto flex mt-8 rounded-xl inner-white flex-col"
                >
                    <p class="flex mx-auto p-2 text-white font-gloria">
                        sept 13
                    </p>
                    <div
                        v-for="n in 6"
                        :key="n"
                        class="bg-white w-36 h-1 flex mx-auto mt-2 rounded-full"
                        :class="{ 'mt-6': n === 1 }"
                    ></div>
                </div>
            </div>
            <div
                class="border-[0.5px] border-[#E2E6EC] rounded-3xl w-full p-4 pb-12"
            >
                <h3 class="font-inter text-[#C8CCD2] font-bold text-[16px]">
                    STEP THREE
                </h3>
                <h4 class="heading-3 font-inter mt-1">Visual progress</h4>
                <div class="relative w-64 mx-auto mt-14">
                    <div
                        class="absolute bottom-12 flex items-center justify-center z-0"
                    >
                        <button
                            class="bg-white rotate-4 p-2 rounded-xl border-[0.1px] border-[#E2E6EC] font-inter text-sm"
                        >
                            Keep going
                        </button>
                    </div>

                    <div
                        class="absolute top-12 right-0 flex items-center justify-center z-0"
                    >
                        <button
                            class="bg-white -rotate-7 p-2 rounded-xl border-[0.1px] border-[#E2E6EC] font-inter text-sm"
                        >
                            Almost done!
                        </button>
                    </div>

                    <div
                        class="relative z-20 rounded-3xl border-[0.1px] border-[#E2E6EC] progress-bar-shadow w-full h-14 bg-gradient-to-r from-[#ADAEFC] from-[66%] to-white to-[66%]"
                    ></div>
                </div>
            </div>
            <div
                class="border-[0.5px] border-[#E2E6EC] rounded-3xl w-full py-22 lg:flex lg:justify-center lg:items-center"
            >
                <div class="relative w-64 mx-auto">
                    <div
                        class="absolute bottom-12 flex items-center justify-center z-0"
                    >
                        <button
                            class="bg-white rotate-4 p-2 px-4 rounded-xl border-[0.1px] border-[#E2E6EC] font-inter text-sm"
                        >
                            Finally
                        </button>
                    </div>

                    <div
                        class="absolute top-12 right-0 flex items-center justify-center z-0"
                    >
                        <button
                            class="-rotate-7 cursor-none bg-[#585BFF] rounded-xl p-2 px-4 text-white font-inter purple-glow text-sm"
                        >
                            Enjoy!!
                        </button>
                    </div>

                    <button
                        class="relative overflow-hidden text-white font-inter z-20 bg-[#040404] h-14 rounded-2xl border-2 border-[#404040] w-full"
                    >
                        Day Off Mode
                        <div
                            class="absolute inset-0 -top-5 rounded-full border-6 border-[#585BFF] blur-2xl bg-white w-full h-12"
                        ></div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
