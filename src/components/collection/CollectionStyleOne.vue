<template>
    <div class="rn-collection-area rn-section-gapTop">
        <div class="container">
            <div class="row mb--50 align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        Category
                    </h3>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div class="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up"
                         data-sal-duration="800">
                        <router-link class="btn-transparent" to="/collection">
                            VIEW ALL <i class="feather-arrow-right"/>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="row g-5">
                <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
                     v-for="(collection, index) in topCollectionList"
                     :key="`collection-${index}`"
                     data-sal="slide-up"
                     :data-sal-delay="150+index"
                     data-sal-duration="800">
                    <product-collection-card :product-collection-date="collection"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCollectionCard from '@/components/product/ProductCollectionCard'

    export default {
        name: 'CollectionStyleOne',
        components: {ProductCollectionCard},
        data() {
            return {
                topCollectionList: [
                    {
                        url: '/collection',
                        thumbnail: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        smallThumbnails: [
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg'},
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg'},
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg'}
                        ],
                        client: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        title: 'Developer',
                        items: '27'
                    },
                    {
                        url: '/collection',
                        thumbnail: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        smallThumbnails: [
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg'},
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg'},
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg'}
                        ],
                        client: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        title: 'Researcher',
                        items: '20'
                    },
                    {
                        url: '/collection',
                        thumbnail: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        smallThumbnails: [
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg'},
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg'},
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg'}
                        ],
                        client: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        title: 'Research',
                        items: '15'
                    },
                    {
                        url: '/collection',
                        thumbnail: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        smallThumbnails: [
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg'},
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg'},
                            {image: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg'}
                        ],
                        client: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        title: 'Research',
                        items: '10'
                    }
                ]
            }
        }
    }
</script>