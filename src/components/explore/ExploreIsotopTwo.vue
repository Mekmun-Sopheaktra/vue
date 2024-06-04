<template>
    <div class="rn-product-area rn-section-gapTop masonary-wrapper-activation">
        <div class="container">
            <div class="row align-items-center mb--30">
                <div class="col-lg-4">
                    <div class="section-title">
                        <h3 class="title mb--0">Explore Class</h3>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30">
                        <button data-filter="*" class="is-checked">All</button>
                        <button data-filter=".cat--1">E1</button>
                        <button data-filter=".cat--2">E2</button>
                        <button data-filter=".cat--3">E3</button>
                        <button data-filter=".cat--4">Lecturers</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="grid-metro4 mesonry-list">
                    <div class="resizer"></div>

                    <div :class="`grid-metro-item ${product.category}`"
                         v-for="(product, index) in exploreProductList"
                         :key="`explore-item-${index}`">
                        <product-card
                            :product-date="product"
                            :product-style-class="placeBid ? 'no-overlay with-placeBid' : ''"
                            :show-place-bid="placeBid"
                            @handleImageLoad="handleImageLoad"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCard from '@/components/product/ProductCard'
    import isotope from "isotope-layout";

    export default {
        name: "ExploreIsotopTwo",
        components: {ProductCard},
        props: {
            placeBid: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                exploreProductList: [
                    {
                        id: 1,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg',
                        biddingAmount: '9',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E2',
                        reacted: '322',
                        category: 'cat--1 cat--3'
                    },
                    {
                        id: 2,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731704/ondtmtzyasxnsmezqkgc.jpg',
                        biddingAmount: '11',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E2',
                        reacted: '420',
                        category: 'cat-3 cat--4'
                    },
                    {
                        id: 3,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg',
                        biddingAmount: '12',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E2',
                        reacted: '12',
                        category: 'cat--5 cat--6'
                    },
                    {
                        id: 4,
                        productImage: 'https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg',
                        biddingAmount: '13',
                        productName: 'Hom Sokhim',
                        latestBid: 'Quote Here',
                        lastBid: 'ITE E2',
                        reacted: '20',
                        category: 'cat--1 cat--2'
                    },
                ],
                imgLoaded: 0
            }
        },
        methods: {
            handleImageLoad() {
                const imagesLength = document.querySelectorAll('.grid-metro-item').length

                this.imgLoaded++;
                if(this.imgLoaded === imagesLength) {
                    // Init Isotope
                    let iso = new isotope('.mesonry-list', {
                        transitionDuration: '0.7s',
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: '.resizer',
                        }
                    });

                    // Filter function
                    let filterFns = {};

                    // Bind filter button click
                    let filtersElem = document.querySelector('.isotop-filter');
                    filtersElem.addEventListener('click', function(event) {
                        if (!event.target.closest('button')) {
                            return;
                        }
                        let filterValue = event.target.getAttribute('data-filter');
                        filterValue = filterFns[ filterValue ] || filterValue;
                        iso.arrange({filter: filterValue});
                    });

                    // Change is-checked class on buttons
                    let buttonGroups = document.querySelectorAll('.isotop-filter');
                    for (let i=0, len = buttonGroups.length; i < len; i++ ) {
                        let buttonGroup = buttonGroups[i];
                        radioButtonGroup(buttonGroup);
                    }

                    function radioButtonGroup(buttonGroup) {
                        buttonGroup.addEventListener('click', function(event) {
                            if (!event.target.closest('button')) {
                                return;
                            }
                            buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
                            event.target.classList.add('is-checked');
                        });
                    }
                }
            }
        }
    }
</script>
