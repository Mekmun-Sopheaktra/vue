<template>
    <div class="d-flex flex-column justify-content-between" :class="`product-style-one ${productStyleClass}`">
      <div class="d-flex flex-column">
        <div class="card-thumbnail mb-4">
          <router-link :to="`/product/${productDate.id}`">
            <img :alt="productDate.productName" :src="productDate.productImage" @load="$emit('handleImageLoad')">
          </router-link>
          <countdown v-if="productDate.countdown" :date="productDate.countdown.date"/>
          <router-link v-if="showPlaceBid" :to="`/product/${productDate.id}`" class="btn btn-primary">
            Place Bid
          </router-link>
        </div>
        <router-link :to="`/product/${productDate.id}`">
          <span class="product-name">{{ productDate.productName }}</span>
        </router-link>
        <span class="latest-bid">{{ productDate.latestBid }}</span>
      </div>

      <div class="bid-react-area">
        <div class="last-bid">{{ productDate.lastBid }}</div>
        <div class="react-area">
          <i class="feather-heart"/>
          <span class="number">{{ productDate.reacted }}</span>
        </div>
      </div>
    </div>
</template>

<script>
    import Countdown from '@/components/product/Countdown';

    export default {
        name: 'ProductCard',
        components: {Countdown},
        props: {
            productDate: {},
            productStyleClass: {
                type: String
            },
            showPlaceBid: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            '$route': function (to, from) {
                this.closeModal()
            }
        },
        methods: {
            closeModal() {
                const modals = document.querySelectorAll('.modal-backdrop');

                if (modals.length) {
                    modals.forEach(item => {
                        item.remove();
                    })
                }
            }
        }
    }
</script>