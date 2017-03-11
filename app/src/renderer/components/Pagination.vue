<template>
  <nav class="pagination">
    <router-link :class="{'is-disabled': current === pageCount}"
                 class="pagination-next"
                 :to="pageHandler(current + 1)">
      Next Page

    </router-link>
    <router-link :class="{'is-disabled': current === 1 }"
                 class="pagination-previous"
                 :to="pageHandler(current - 1)">
      Previous Page

    </router-link>

    <ul class="pagination-list">
      <router-link tag="li" class="pagination-link" :to="pageHandler(1)">
        <a>1</a>
      </router-link>

      <li v-for="page in pagesBetween">
        <span v-if="page.more" class="pagination-ellipsis">&hellip;</span>
        <router-link v-else class="pagination-link" :to="pageHandler(page.index)">
          {{page.index}}

        </router-link>
        <span v-else class="pagination-ellipsis">&hellip;</span>
      </li>

      <router-link tag="li" class="pagination-link" :to="pageHandler(pageCount)">
        <a>{{pageCount}}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      pageCount: {
        type: Number,
        required: true,
      },
      current: {
        type: Number,
        default: 1,
      },
      pageHandler: {
        type: Function,
        default: (page) => page,
      },
      pageRange: {
        type: Number,
        default: 6,
      },
      marginPages: {
        type: Number,
        default: 1,
      },
    },
    computed: {
      pagesBetween() {
        const items = {};

        if (this.pageCount <= this.pageRange) {
          for (let index = 0; index < this.pageCount; index++) {
            items[index] = {
              index,
              selected: index === this.selected,
            };
          }
        } else {
          let leftPart = this.pageRange / 2;
          let rightPart = this.pageRange - leftPart;

          if (this.selected < leftPart) {
            leftPart = this.selected;
            rightPart = this.pageRange - leftPart;
          } else if (this.selected > this.pageCount - this.pageRange / 2) {
            rightPart = this.pageCount - this.selected;
            leftPart = this.pageRange - rightPart;
          }

          for (let index = 0; index < this.pageCount; index++) {
            const page = {
              index,
              selected: index === this.selected,
            };
            if (index <= this.marginPages - 1 || index >= this.pageCount - this.marginPages) {
              items[index] = page;
              continue;
            }

            const breakView = { more: true };

            if ((this.selected - leftPart) > this.marginPages
              && items[this.marginPages] !== breakView) {
              items[this.marginPages] = breakView;
            }
            if ((this.selected + rightPart) < (this.pageCount - this.marginPages - 1)
              && items[this.pageCount - this.marginPages - 1] !== breakView) {
              items[this.pageCount - this.marginPages - 1] = breakView;
            }

            const overCount = this.selected + rightPart - this.pageCount + 1;

            if (overCount > 0 && index === this.selected - leftPart - overCount) {
              items[index] = page;
            }

            if ((index >= this.selected - leftPart) && (index <= this.selected + rightPart)) {
              items[index] = page;
            }
          }
        }
        return items;
      },
    },
  };
</script>
