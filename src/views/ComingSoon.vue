<template>
    <div class="maintanence-area">
        <div class="wrapper">
            <div class="row row--0 h-100">
                <div class="col-lg-4 col-md-4">
                    <div class="inner">
                        <div class="logo logo-custom-css">
                            <router-link class="logo-light" to="/">
                                <img :src="require(`@/assets/images/logo/logo-white.png`)" alt="nft-logo">
                            </router-link>
                            <router-link class="logo-dark" to="/">
                                <img :src="require(`@/assets/images/logo/logo-dark.png`)" alt="nft-logo">
                            </router-link>
                        </div>
                        <div class="content">
                            <span class="sub-title">Stay Tuned</span>
                            <h3 class="title">
                                <span>Coming Soon</span>
                            </h3>
                            <p>
                                We are available Soon
                                <br>
                                Develop By : <a>ITE Dev Team</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 p-4">
                  <iframe src="https://www.facebook.com/plugins/video.php?height=400&href=https%3A%2F%2Fwww.facebook.com%2Frupp.fe%2Fvideos%2F6912873248788508%2F&show_text=false&width=560&t=0"
                          width="560" height="850"
                          style="border:none;overflow:hidden"
                          allowfullscreen="allowfullscreen"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue3-carousel'

    export default {
        name: 'ComingSoon',
        components: {Carousel, Slide},
    }
</script>