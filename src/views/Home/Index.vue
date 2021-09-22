<template>
  <v-layout>
    <section class="banner section-temp">
      <div class="container">
        <div class="">
          <div class="celeb-unit">Đơn vị tổ chức</div>
          <div class="celeb-title">
            <h1>
              Hỗ trợ các công cụ <br />
              thực hiện Marketing
            </h1>
          </div>
          <div class="custom-height"></div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Đang diễn ra" name="being-event">
              <el-carousel :interval="4000" type="card" height="108px">
                <el-carousel-item v-for="item in 6" :key="item">
                  <div class="">
                    <div class="event-item">
                      <div class="event-left">
                        <div class="event-month">Tháng 8</div>
                        <div class="event-day">
                          {{ item }}
                        </div>
                      </div>
                      <div class="event-right">
                        <div class="event-name">
                          Hỗ trợ các công cụ thực hiện Marketing
                        </div>
                      </div>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </el-tab-pane>
            <el-tab-pane label="Sắp diễn ra" name="incoming-event">
              <el-carousel :interval="4000" type="card" height="108px">
                <el-carousel-item v-for="item in 6" :key="item">
                  <div class="">
                    <div class="event-item">
                      <div class="event-left">
                        <div class="event-month">Tháng 8</div>
                        <div class="event-day">
                          {{ item }}
                        </div>
                      </div>
                      <div class="event-right">
                        <div class="event-name">
                          Hỗ trợ các công cụ thực hiện Marketing
                        </div>
                      </div>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>
    <section class="filter section-temp">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="filter-ctn">
              <div class="filter-by-name">
                <el-input
                  placeholder="Tên sự kiện"
                  v-model="filter.inputByName"
                ></el-input>
              </div>
              <div class="filter-by-theme">
                <el-input
                  placeholder="Chủ đề"
                  v-model="filter.inputByTheme"
                ></el-input>
              </div>
              <div class="filter-by-event-type">
                <el-input
                  placeholder="Loại sự kiện"
                  v-model="filter.inputByEventType"
                ></el-input>
              </div>
              <div class="filter-by-event-cost">
                <!-- <el-input placeholder="Phí tham dự" v-model="filter.inputByEventCost"></el-input> -->
                <el-select
                  v-model="filter.inputByEventCost"
                  placeholder="Phí tham dự"
                >
                  <el-option
                    v-for="item in optionsCost"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="filter-by-event-time">
                <div class="block">
                  <el-date-picker
                    v-model="filter.inputByEventTime"
                    type="daterange"
                    align="right"
                    start-placeholder="Ngày bắt đầu"
                    end-placeholder="Ngày kết thúc"
                    default-value="2010-10-01"
                  >
                  </el-date-picker>
                </div>
              </div>
              <div class="view-result">
                <el-button type="primary" icon="el-icon-search"
                  >Xem kết quả</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="incoming-event section-temp">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="common-title text-center text-bold">Sắp diễn ra</div>
            <div class="event-container">
              <div class="event-data-ctn">
                <event-item
                  v-for="(item, index) in dataIncomingEvent"
                  :key="index"
                  :themeName="item.themeName"
                  :imgSrc="item.imgSrc"
                  :EventName="item.EventName"
                  :OrganizerUnit="item.OrganizerUnit"
                  :EventShortContent="item.EventShortContent"
                  :EventDetailLink="item.EventDetailLink"
                />
              </div>
              <div class="pagin-ctn">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="dataIncomingEvent.length || 0"
                  :page-size="paginationConfig.pageSize"
                  @prev-click="incomingEventHandleOnPrevClick"
                  @next-click="incomingEventHandleOnNextClick"
                  @current-change="incomingEventHandleCurrentChange"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="being-event section-temp">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="common-title text-center text-bold">Đã diễn ra</div>
            <div class="event-container">
              <div class="event-data-ctn">
                <event-item />
                <event-item />
                <event-item />
              </div>
              <div class="pagin-ctn">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="register-noti section-temp">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            
          </div>
        </div>
      </div>
    </section> -->
  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VLayout from "@/layouts/Default.vue";
import EventItem from "@/components/EventItem";
export default {
  /**
   * The name of the page.
   */
  name: "HomeIndex",
  data() {
    return {
      paginationConfig: {
        pageSize: 3,
      },
      activeName: "being-event",
      filter: {
        inputByName: "",
        inputByTheme: "",
        inputByEventType: "",
        inputByEventCost: 0,
        inputByEventTime: null,
      },
      optionsCost: [
        {
          value: "1",
          label: "<= 250.000",
        },
        {
          value: "2",
          label: "250.000 - 500.000",
        },
        {
          value: "3",
          label: ">= 500.000",
        },
      ],
      // biến chứa data sự kiện sắp diễn ra
      dataIncomingEvent: [
        {
          themeName: "Chủ đề 1",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 1",
          OrganizerUnit: "Đơn vị tổ chức 1",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 2",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 2",
          OrganizerUnit: "Đơn vị tổ chức 2",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 3",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 3",
          OrganizerUnit: "Đơn vị tổ chức 3",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 4",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 4",
          OrganizerUnit: "Đơn vị tổ chức 4",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 5",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 5",
          OrganizerUnit: "Đơn vị tổ chức 5",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 6",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 6",
          OrganizerUnit: "Đơn vị tổ chức 6",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 7",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 7",
          OrganizerUnit: "Đơn vị tổ chức 7",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 8",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 8",
          OrganizerUnit: "Đơn vị tổ chức 8",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 9",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 9",
          OrganizerUnit: "Đơn vị tổ chức 9",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
        {
          themeName: "Chủ đề 10",
          imgSrc: "/img/home/event-item.png",
          EventName: "Tên sự kiện 10",
          OrganizerUnit: "Đơn vị tổ chức 10",
          EventShortContent: "Nội dung ngắn sự kiện 1",
          EventDetailLink: "facebook.com",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    /**
     * @description Sự kiện khi ấn nút prev pagination
     * @author natuan1
     * @date 22-09-2021
     */
    incomingEventHandleOnPrevClick(val) {
      console.log(val || 1);
    },
    /**
     * @description Sự kiện khi ấn nút next pagination
     * @author natuan1
     * @date 22-09-2021
     */
    incomingEventHandleOnNextClick(val) {
      console.log(val || 1);
    },
    /**
     * @description Sự kiện khi thay đổi trang trong pagination
     * @author natuan1
     * @date 22-09-2021
     */
    incomingEventHandleCurrentChange(val) {
      console.log(val || 1);
    }
  },
  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    "event-item": EventItem,
  },
};
</script>
<style lang="css">
/* #region header */

.logo-ctn img {
  display: block;
  max-width: 200px;
  height: 60px;
  max-height: 60px;
  line-height: 60px;
  padding: 10px 0;
  top: 0;
}

.banner {
  background: url(/img/home/bg-banner.jpg);
  color: #fff;
}

.celeb-unit {
  text-transform: uppercase;
}

.celeb-title {
  font-family: "googlesans bold";
  font-size: 32px;
  padding: 16px 0 24px;
  line-height: 1.7;
}

.misa-slide-list {
  display: flex;
  justify-content: center;
  list-style: none;
}

.misa-slide-list a {
  color: #fff;
  text-transform: uppercase;
  padding: 10px 10px;
}

.misa-slide-list a:hover,
.misa-slide-list a:active,
.misa-slide-list a:focus,
.misa-slide-list a:visited {
  text-decoration: none;
}

.misa-slide-list li.active a {
  position: relative;
}

.misa-slide-list li.active a::before {
  position: absolute;
  content: "";
  bottom: 0;
  left: calc(50% - 30px);
  width: 60px;
  height: 2px;
  background-color: #fff;
}

.event-item {
  display: flex;
  background: #fff;
  color: #212121;
  width: 100%;
  flex-wrap: nowrap;
  padding: 24px;
  border-radius: 15px;
  align-items: center;
  font-family: "GoogleSans Bold";
  text-align: center;
}

.event-day {
  font-size: 24px;
  font-family: "GoogleSans Bold";
}

.event-month {
  color: #0319f4;
}

.event-left {
  width: 30%;
}

.event-right {
  width: 70%;
}

.ms-carousel {
  padding-top: 36px;
}

.slick-track {
  display: flex;
}

.slick-track > div {
  margin: 0 15px;
}
.el-tabs__item {
  color: #fff;
}
@media screen and (min-width: 980px) {
  .misa-slide-list {
    padding-top: 48px;
  }
}

/* #endregion */

/* #region main  */
.filter-ctn {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 20px 20px;
  border-radius: 50px;
  border: 1px solid #d0d0d0;
}

.filter-ctn {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 20px 20px;
  border-radius: 50px;
  border: 1px solid #d0d0d0;
}

.card-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  box-shadow: 0 6px 15px rgb(0 0 0 / 15%);
  border-radius: 16px;
  margin-bottom: 36px;
  background: #fff;
}

.event-col-1 {
  position: relative;
  width: 30%;
  overflow: hidden;
}

.theme-name {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #fff;
  border-radius: 5px;
  padding: 3px 8px;
  color: #000;
  font-family: "GOOGLESANS Bold";
  font-size: 14px;
}

.event-col-2 {
  width: 50%;
  padding: 12px 24px;
  position: relative;
}

.common-sm-title {
  font-size: 24px;
  font-family: "GoogleSans Bold";
  padding-bottom: 10px;
}

.view-event-detail {
  position: absolute;
  bottom: 16px;
  left: 24px;
}

.event-col-3 {
  width: 20%;
}

.ed-card-ctn {
  padding: 16px;
  border-radius: 0;
  border-left: 1px solid #c1c1c1;
}

div#Time {
  padding: 0 0 8px 24px;
  position: relative;
}

div#Time:before {
  position: absolute;
  content: url(/img/detail/ic-clock.svg);
  top: 1px;
  left: -4px;
  width: 20px;
  height: 20px;
}

div#Location {
  padding: 0 0 8px 24px;
  position: relative;
}

div#Location:before {
  position: absolute;
  content: url(/img/detail/ic-location.svg);
  top: 1px;
  left: -4px;
  width: 20px;
  height: 20px;
}

div#Quantity {
  padding: 0 0 8px 24px;
  position: relative;
}

div#Quantity:before {
  position: absolute;
  content: url(/img/detail/ic-user.svg);
  top: 1px;
  left: -4px;
  width: 20px;
  height: 20px;
}

div#Booking {
  padding: 0 0 8px 0px;
  position: relative;
  text-align: center;
  margin-top: 8px;
}

div#Cost {
  padding: 0 0 8px 24px;
  position: relative;
}

div#Cost:before {
  position: absolute;
  content: url(/img/detail/ic-user.svg);
  top: 1px;
  left: -4px;
  width: 20px;
  height: 20px;
}

input#BookingBtn {
  background: #212121;
  color: #fff;
  padding: 12px 23px;
  border-radius: 30px;
}
/* #endregion */

/* #region incoming event */
.incoming-event {
  background: #f1f1f1;
}
/* #endregion */
/* #region pagination */
.pagin-ctn {
  text-align: center;
}
/* #endregion */
</style>
