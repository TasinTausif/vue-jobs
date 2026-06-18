<script setup>
import { reactive, defineProps, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import JobListing from '@/components/JobListing.vue'

import axios from 'axios';

// Reactive is similar to ref. But reactive takes only obj and can be assigned only by abject values once. Ref is not bound for any specific data type and can be reassigned as well
const state = reactive({
    jobs: [],
    isLoading: true
})

defineProps({
    jobLimit: Number,
    showButton: {
        type: Boolean,
        default: false,
    },
})

// onMounted works like useEffect with empty array. First time loads the data
onMounted(async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const response = await axios.get('/api/jobs');
        state.jobs = response.data;
    } catch (error) {
        console.error('Error fetching Data', error);
    }finally{
        state.isLoading = false;
    }
})
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browser Jobs
            </h2>

            <!-- Loader -->
            <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader/>
            </div>
            
            <!-- Job Data -->
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="(job, index) in state.jobs.slice(
                    0,
                    jobLimit || state.jobs.length,
                )" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs
        </RouterLink>
    </section>
</template>