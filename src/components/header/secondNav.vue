
<script>
import colNav from "./colNav";
import rowNav from "./rowNav";
export default {
  props: ["type", "content"],
  data() {
    return {};
  },
  components: {
    colNav,
    rowNav,
  },
  render(creatElement) {
    const result = this.type == "row" ? rowNav : colNav;
    const content = this.content;
    return creatElement(result, {
      props: {
        content,
      },
    });
  },
};
</script>