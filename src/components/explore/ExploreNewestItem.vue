<template>
    <div class="rn-new-items rn-section-gapTop">
        <div class="container">
            <div class="row mb--50 align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      Explore Projects
                    </h3>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div class="view-more-btn text-start text-sm-end">
                        <router-link class="btn-transparent" to="/product" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            VIEW ALL <i class="feather-arrow-right"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                     v-for="(item, index) in newestItemList"
                     :key="`newest-item-${index}`"
                     data-sal="slide-up"
                     :data-sal-delay="150+index"
                     data-sal-duration="800">
                    <product-card
                        :product-date="item"
                        product-style-class="no-overlay"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCard from '@/components/product/ProductCard'

    export default {
        name: 'ExploreNewestItem',
        components: {ProductCard},
        data() {
            return {
                newestItemList: [
                    {
                        id: 1,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg',
                        biddingAmount: '20',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E3',
                        reacted: '322'
                    },
                    {
                        id: 2,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg',
                        biddingAmount: '10',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E3',
                        reacted: '420'
                    },
                    {
                        id: 3,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg',
                        biddingAmount: '10',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E3',
                        reacted: '12'
                    },
                    {
                        id: 4,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg',
                        biddingAmount: '8',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E3',
                        reacted: '20'
                    },
                    {
                        id: 5,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg',
                        biddingAmount: '15',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E3',
                        reacted: '205'
                    }
                ]
            }
        }
    }
</script>