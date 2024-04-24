<template>
    <div class="rn-notification-area right-fix-notice">
        <div class="h--100">
            <div class="notice-heading">
                <h4>Events</h4>
            </div>
        </div>
        <div class="rn-notification-wrapper">
            <div class="single-notice"
                 v-for="(event, index) in eventList"
                 :key="`notification-${index}`">
                <div class="thumbnail">
                    <router-link :to="event.url">
                        <img :src="event.img" alt="Images">
                    </router-link>
                </div>
                <div class="content-wrapper">
                    <router-link :to="event.url">
                        <h6 class="title">{{ event.title }}</h6>
                    </router-link>
                    <p>{{ event.description }}</p>
                    <div class="notice-time">
                        <span>{{ event.date }} </span>
                        <span>{{ event.time }}</span>
                    </div>
                    <router-link :to="event.url" class="btn btn-primary-alta">More Details</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NiceSelect from '@/components/select/NiceSelect'

    export default {
        name: 'NotificationListSidebar',
        components: {NiceSelect},
        data() {
            return {
                eventList: [
                    {
                        url: '/connect',
                        img: require(`@/assets/images/icons/meta.svg`),
                        title: 'Grand Opening',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-4.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-5.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-6.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-6.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-7.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-8.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-9.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-10.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-11.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-1.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-2.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-3.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-4.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-5.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                    {
                        url: '/connect',
                        img: require(`@/assets/images/client/client-6.png`),
                        title: 'Sold Darken Forever Quick',
                        description: 'Has been sold by 1221 ETH',
                        date: '15 July',
                        time: '10:32 PM'
                    },
                ],
            }
        }
    }
</script>