<template>
  <div class="card-item">
    <div class="event-col-1">
      <img width="333px" height="228px" :src="imgSrc" :alt="themeName" />
      <div class="theme-name">
        {{ themeName }}
      </div>
    </div>
    <div class="event-col-2">
      <div class="common-sm-title">{{ EventName }} | {{ OrganizerUnit }}</div>
      <div class="event-short-content">
        {{ EventShortContent }}
      </div>
      <div class="view-event-detail">
        <!-- <a :href="EventDetailLink" icon="el-icon-arrow-right"> Xem chi tiết </a> -->
        <el-link :href="EventDetailLink" :underline="false">Xem chi tiết <i class="el-icon-arrow-right el-icon--right"></i> </el-link>
      </div>
    </div>
    <div class="event-col-3">
      <div>
        <div class="ed-card-ctn">
          <div id="Time">23/05/2021 - 14:00PM</div>
          <div id="Location">Ba Đình, Hà Nội</div>
          <div id="Quantity">20</div>
          <div id="Cost">Miễn phí</div>
          <div id="Booking">
            <input type="button" value="Đặt chỗ ngay" id="BookingBtn" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventItem",
  props: {
    // Chủ đề sự kiện
    themeName: {
      type: String,
      default: 'Chủ đề'
    },
    // source ảnh
    imgSrc: {
      type: String,
      default: "/img/home/event-item.png",
    },
    // Tên sự kiện
    EventName: {
      type: String,
      default: "Tên sự kiện",
    },
    // Đơn vị tổ chức
    OrganizerUnit: {
      type: String,
      default: "Đơn vị tổ chức",
    },
    // Nội dung ngắn sự kiện
    EventShortContent: {
      type: String,
      default: "Nội dung ngắn",
    },
    // Link chi tiết sự kiện
    EventDetailLink: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style>
</style>