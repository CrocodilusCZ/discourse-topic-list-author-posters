import { apiInitializer } from "discourse/lib/api";
import CustomPostersHeader from "../components/custom-posters-header";
import CustomPostersCell from "../components/custom-posters-cell";
import CustomCategoriesLatestAvatar from "../components/custom-categories-latest-avatar";

// Show topic author avatar on categories page if setting enabled
export default apiInitializer((api) => {
  if (settings.show_author_on_categories_page === true) {
    api.renderInOutlet(
      "latest-topic-list-item-topic-poster",
      CustomCategoriesLatestAvatar
    );
  }

  // Replace posters header AND poster column contents in topic lists if setting enabled
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
