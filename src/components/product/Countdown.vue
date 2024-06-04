<template>
  <div class="countdown">
    <div v-if="isPast" class="d-flex">
      <div class="countdown-container days">
        <span class="countdown-value">{{ twoDigits(daysAgo) }}</span>
        <span class="countdown-heading">D's ago</span>
      </div>
      <div class="countdown-container hours">
        <span class="countdown-value">{{ twoDigits(hoursAgo) }}</span>
        <span class="countdown-heading">H's</span>
      </div>
      <div class="countdown-container minutes">
        <span class="countdown-value">{{ twoDigits(minutesAgo) }}</span>
        <span class="countdown-heading">Min's</span>
      </div>
      <div class="countdown-container seconds">
        <span class="countdown-value">{{ twoDigits(secondsAgo) }}</span>
        <span class="countdown-heading">Sec</span>
      </div>
    </div>
    <div v-else class="d-flex">
      <div class="countdown-container days">
        <span class="countdown-value">{{ twoDigits(days) }}</span>
        <span class="countdown-heading">D's</span>
      </div>
      <div class="countdown-container hours">
        <span class="countdown-value">{{ twoDigits(hours) }}</span>
        <span class="countdown-heading">H's</span>
      </div>
      <div class="countdown-container minutes">
        <span class="countdown-value">{{ twoDigits(minutes) }}</span>
        <span class="countdown-heading">Min's</span>
      </div>
      <div class="countdown-container seconds">
        <span class="countdown-value">{{ twoDigits(seconds) }}</span>
        <span class="countdown-heading">Sec</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    date: null
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      event: new Date(`${this.date}T16:37:00`),
      finish: false
    }
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    isPast() {
      return this.secondCount < 0
    },
    seconds() {
      if (this.isPast) return 0
      return this.secondCount % 60
    },
    minutes() {
      if (this.isPast) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours() {
      if (this.isPast) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days() {
      if (this.isPast) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    },
    secondsAgo() {
      if (!this.isPast) return 0
      return Math.abs(this.secondCount) % 60
    },
    minutesAgo() {
      if (!this.isPast) return 0
      return Math.trunc(Math.abs(this.secondCount) / 60) % 60
    },
    hoursAgo() {
      if (!this.isPast) return 0
      return Math.trunc(Math.abs(this.secondCount) / 60 / 60) % 24
    },
    daysAgo() {
      if (!this.isPast) return 0
      return Math.trunc(Math.abs(this.secondCount) / 60 / 60 / 24)
    }
  },
  methods: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString();
      }
      return value.toString();
    }
  },
  mounted() {
    const _self = this;
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000);
  },
}
</script>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
}

.countdown-container {
  margin: 0 10px;
  text-align: center;
}

.countdown-value {
  font-size: 2em;
  font-weight: bold;
}

.countdown-heading {
  font-size: 1em;
}
</style>
