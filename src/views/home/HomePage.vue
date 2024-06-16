<template>
  <layout-sidebar>
    <template v-slot:banner>
      <div class="rn-banner-area">
        <div class="slider-style-7 bg_image--15 bg_image" data-black-overlay="8">
          <div class="rn-banner-wrapper row">
            <div class="col-xl-3 col-lg-12 col-12 order-3 order-xl-1">
              <div class="item-description">
                <p>
                  Academic Year 2020-2024 <br>Generation 7 Alumni
                </p>
                <div class="product-share-wrapper">
                  <div class="profile-share">
                    <router-link class="avatar" data-tooltip="E1" to="/author/1"><img
                        alt="Nft_Profile"
                        src="https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg"></router-link>
                    <router-link class="avatar" data-tooltip="E2" to="/author/2"><img
                        alt="Nft_Profile"
                        src="https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg"></router-link>
                    <router-link class="avatar" data-tooltip="E3" to="/author/3"><img
                        alt="Nft_Profile"
                        src="https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg">
                    </router-link>
                    <router-link class="more-author-text" to="#">Class of ITE G7</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7 col-lg-12 col-12 order-2 order-xl-2">
              <h2 class="title">
                Royal University of Phnom Penh
                <br>Faculty of Engineering <br>
                <span>IT Engineering Generation 7</span>
              </h2>
            </div>
            <div class="col-xl-2 col-lg-12 col-12 order-1 order-xl-3">
              <div class="d-flex flex-column img-thumb-award gap-3 md:align-items-center">
                <img alt="rupp-logo" src="https://upload.wikimedia.org/wikipedia/en/a/a2/RUPP_logo.PNG"
                     width="100">
                <div class="divider" />
                <div class="d-flex gap-3">
                  <img alt="fe-logo" src="https://www.fe.rupp.edu.kh/assets/logo-fe.c04ca1d6-4b48efc6.svg"
                       width="50">
                  <img
                      src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/396717787_804857584773344_3543346762002089097_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tJ0go_UI2uAQ7kNvgEzBHo_&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYCulIAaMZZrqZR2eXe8JlhtFdYuA9yhqEMdqJ2fGho8Aw&oe=666ED00D"
                      width="50">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Live Bidding Area Start -->
    <div id="list-item-2">
      <explore-live :product-limit="4" product-column="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12"/>
    </div>
    <!-- Live Bidding Area End -->

    <!-- Collection Area Start -->
    <collection-style-one/>
    <!-- Collection Area End -->

    <!-- Start Explore Area -->
    <div id="list-item-3">
      <explore-isotop-two/>
    </div>
    <!-- End Explore Area -->

    <!-- Start Service Area -->
    <div id="list-item-4">
      <explore-newest-item/>
    </div>
    <!-- End Service Area -->
  </layout-sidebar>
</template>

<script>
import LayoutSidebar from '@/components/layouts/LayoutSidebar'
import ExploreLive from '@/components/explore/ExploreLive'
import CollectionStyleOne from '@/components/collection/CollectionStyleOne'
import ServiceStyleOne from '@/components/service/ServiceStyleOne'
import ExploreIsotopTwo from '@/components/explore/ExploreIsotopTwo'
import ExploreNewestItem from "../../components/explore/ExploreNewestItem.vue";

export default {
  name: 'HomePageSeven',
  components: {
    ExploreNewestItem,
    ExploreIsotopTwo, ServiceStyleOne, CollectionStyleOne, ExploreLive, LayoutSidebar
  }
}
</script>

<style scoped lang="css">
.divider {
  width: 75%;
  height: 1px;
  background-color: #e5e5e5;
}
</style>