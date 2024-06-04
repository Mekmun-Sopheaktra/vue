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
                        img: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        title: 'Final Collect Report',
                        description: 'Collect Report of Students',
                        date: '15 June',
                        time: '10:32 PM'
                    }
                ],
            }
        }
    }
</script>