<template>
    <div class="rn-creators-area right-fix-notice creators mt--30">
        <div class="h--100">
            <div class="notice-heading">
                <h4>Browse Skills</h4>
            </div>
        </div>
        <div class="rn-notification-wrapper creators">
            <div class="top-seller-inner-one"
                 v-for="(creator, index) in creatorsList"
                 :key="`creator-${index}`">
                <div class="top-seller-wrapper">
                    <div :class="[`thumbnail`, {'varified': creator.isVerified}]">
                        <router-link :to="`/author/${creator.id}`">
                            <img :src="creator.image" alt="Nft_Profile">
                        </router-link>
                    </div>
                    <div class="top-seller-content">
                        <router-link :to="`/author/${creator.id}`">
                            <h6 class="name">{{ creator.name }}</h6>
                        </router-link>
                        <span class="count-number">
                            {{ creator.sellingAmount }} students
                        </span>
                    </div>
                </div>
                <router-link :to="`/author/${creator.id}`" class="btn btn-primary-alta">
                    More Details
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import NiceSelect from '@/components/select/NiceSelect'

    export default {
        name: 'CreatorListSidebar',
        components: {NiceSelect},
        data() {
            return {
                creatorsList: [
                    {
                        id: 1,
                        isVerified: false,
                        image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg',
                        name: 'Web Developer',
                        sellingAmount: '10'
                    }
                ],
            }
        }
    }
</script>