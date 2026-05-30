import { apiInitializer } from "discourse/lib/api";
import CustomPostersHeader from "../components/custom-posters-header";
import CustomPostersCell from "../components/custom-posters-cell";

export default apiInitializer((api) => {
  api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
    if (settings.topic_list_show_last_poster_only === true) {
      columns.replace("posters", {
        item: CustomPostersCell,
        header: CustomPostersHeader,
      });
    }

    return columns;
  });
});
