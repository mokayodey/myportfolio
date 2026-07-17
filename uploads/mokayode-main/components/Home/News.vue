<template>
  <div class="w-full flex justify-center items-center min-h-[400px] mb-28">
    <div class="w-[90%] flex justify-between flex-col gap-y-28 items-center">
      <div class="w-full flex gap-2 justify-center items-center">
        <h1 class="opacity-30 text-center text-xs md:text-sm">IN THE NEWS</h1>
        <h1 class="text-center text-xs md:text-base">IN THE NEWS</h1>
        <h1 class="opacity-30 text-xs md:text-sm">IN THE NEWS</h1>
      </div>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          v-for="article in articles"
          :key="article.id"
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group cursor-pointer"
        >
          <div
            class="w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            style="box-shadow: rgba(142, 151, 158, 0.15) 0px 4px 19px 0px"
          >
            <div
              class="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative"
            >
              <img
                :src="article.thumbnail"
                :alt="article.title"
                class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs text-gray-500 uppercase">{{
                  article.source
                }}</span>
                <span class="text-xs text-gray-400">•</span>
                <span class="text-xs text-gray-500">{{ article.date }}</span>
              </div>
              <h3
                class="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300"
              >
                {{ article.title }}
              </h3>
              <p class="text-sm text-gray-600 line-clamp-2">
                {{ article.excerpt }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import businessInsiderLogo from "~/assets/images/BusinessInsiderlogo.png";
import vanguardLogo from "~/assets/images/Vanguard.png";
import guardianLogo from "~/assets/images/TheGuardian.png";
import technextLogo from "~/assets/images/Technext.png";

const articles = [
  {
    id: 1,
    title: "Transforming maternal care in Nigeria: A product designer's role",
    excerpt:
      "Maternal mortality remains a significant challenge in Nigeria, with the country accounting for 20% of maternal deaths globally. This article dives into Kayode Ariyibi's experience using design to solve real world problems through research and innovation at Helium Health.",
    source: "Business Insider Africa",
    date: "December 9, 2024",
    url: "https://africa.businessinsider.com/local/lifestyle/transforming-maternal-care-in-nigeria-a-product-designers-role/kknswyv",
    thumbnail: businessInsiderLogo,
  },
  {
    id: 2,
    title:
      "Nigerian startup seeks to connect payments and business management for SMEs",
    excerpt:
      "A Nigerian startup co-founded by Kayode Ariyibi is focusing on integrating payment solutions with business management tools for small and medium-sized enterprises.",
    source: "Vanguard",
    date: "October 2025",
    url: "https://www.vanguardngr.com/2025/10/nigerian-startup-seeks-to-connect-payments-and-business-management-for-smes/",
    thumbnail: vanguardLogo,
  },
  {
    id: 3,
    title:
      "Tida partners Mkobo Bank to expand access to retail tech and financing",
    excerpt:
      "Tida Retail Limited has entered into a partnership with Mkobo Microfinance Bank to improve access to digital tools and financing for small and medium-sized retailers in Nigeria.",
    source: "The Guardian",
    date: "October 13, 2025",
    url: "https://guardian.ng/news/tida-partners-mkobo-bank-to-expand-access-to-retail-tech-and-financing/",
    thumbnail: guardianLogo,
  },
  {
    id: 4,
    title: "Kayode Ariyibi's Journey of Designing for Impact",
    excerpt:
      "An in-depth profile of Kayode Ariyibi's career, detailing his impact on healthcare, digital music streaming, and fintech through user experience design.",
    source: "Technext",
    date: "September 4, 2024",
    url: "https://technext24.com/2024/09/04/kayode-ariyibis-journey-designing-impact/",
    thumbnail: technextLogo,
  },
];
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

