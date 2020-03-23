<template>
  <div class="col-12 p-0">
    <div class="compose-header-container">
      <div class="row">
        <h4 class="font-weight-bold title">
          <strong>Home</strong>
        </h4>
        <img
          src="@/assets/images/feed-order.png"
          alt="Feed Order icon"
          class="ml-auto mr-2"/>
      </div>
    </div>
    <div class="compose-container" style="width: 100%; padding: 0;">
      <div class="row pt-2">
        <div class="col-1">
          <img
          src="@/assets/images/profile-picture.png"
          alt="Profile picture"
          class="profile-image mt-1 ml-2">
        </div>
        <div class="col-11">
          <b-form-textarea
            wrap
            autofocus
            class="tweet-input"
            rows="1"
            placeholder="What's happening?"
            v-model="tweet"/>
        </div>
      </div>
      <div class="row pb-2">
        <div class="ml-auto mr-4">
          <button
            class="btn btn-primary send-tweet-btn mr-2"
            :disabled="!tweet">
            <strong>Tweet</strong>
          </button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Compose-Tweet',
  data: () => ({
    tweet: '',
  })
}
</script>

<style lang="scss" scoped>

  .compose-header-container {
    padding: 0 1vh 0 2vh;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .compose-container {
    border-bottom: 10px solid rgba(230, 236, 240, 0.9);
  }

  .title {
    padding-top: 1.3vh;
    font-size: 1.4rem;
    margin-left: 1.5vw;
  }

  .profile-image {
    border-radius: 25rem;
    width: 3rem;
  }

  .tweet-input, :focus {
    width: 100%;
    font-size: 1.2rem;
    padding: 1vh 0 0 1vw;
    border: none;
    resize: none;
    box-shadow: none;
  }

  .send-tweet-btn {
    border-radius: 3rem;
    padding: 0.7vh 1.8vw 0.7vh 1.8vw;
  }
</style>