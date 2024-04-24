<template>
    <div class="rn-new-items rn-section-gapTop">
        <div class="container">
            <div v-if="showTitle" class="section-title mb--30">
                <h3 class="title mb--0 live-bidding-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    Live Time
                </h3>
            </div>
            <div class="row g-5">
                <template v-for="(item, index) in liveItems"
                          :key="`newest-item-${index}`">
                    <div v-if="index < productLimit"
                         :class="productColumn"
                         data-sal="slide-up"
                         :data-sal-delay="150+index"
                         data-sal-duration="800">
                        <product-card
                            :product-date="item"
                            :show-place-bid="showPlaceBid"
                            :product-style-class="showPlaceBid ? 'no-overlay with-placeBid' : ''"
                        />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCard from '@/components/product/ProductCard'

    export default {
        name: 'ExploreLive',
        components: {ProductCard},
        props: {
            showTitle: {
                type: Boolean,
                default: true
            },
            productLimit: {
                type: Number,
                default: 5
            },
            productColumn: {
                type: String,
                default: 'col-5 col-lg-4 col-md-6 col-sm-6 col-12'
            },
            showPlaceBid: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                liveItems: [
                    {
                        id: 7,
                        productImage: require(`@/assets/images/portfolio/portfolio-07.jpg`),
                        countdown: {
                            date: '2024-11-09'
                        },
                        productName: 'Start University Life',
                        latestBid: 'The Beginning of The University Students',
                        lastBid: '01 Jan 2020',
                        reacted: '322'
                    },
                    {
                        id: 10,
                        productImage: require(`@/assets/images/portfolio/portfolio-10.jpg`),
                        countdown: {
                            date: '2023-11-09'
                        },
                        productName: 'Day to State Exam',
                        latestBid: 'The End of the University State Exam',
                        lastBid: '30 June 2024',
                        reacted: '322'
                    },
                    {
                        id: 3,
                        productImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        countdown: {
                            date: '2023-10-09'
                        },
                        productName: 'Day to Final Defense',
                        latestBid: 'Defense of the Final Project to Fulfill the Final Task',
                        lastBid: '0.244wETH',
                        reacted: '12'
                    },
                    {
                        id: 4,
                        productImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        countdown: {
                            date: '2023-12-09'
                        },
                        productName: 'Complete University',
                        latestBid: 'Complete Bachelor Degree of ITE G7, RUPP',
                        lastBid: '0.244wETH',
                        reacted: '20'
                    },
                ]
            }
        }
    }
</script>
