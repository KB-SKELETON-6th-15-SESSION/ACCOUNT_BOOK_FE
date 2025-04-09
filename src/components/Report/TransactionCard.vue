<template>
  <div class="card mb-2 border">
    <div class="card-body d-flex align-items-center">
      <!-- 아이콘 원 -->
      <div
        class="rounded-circle me-3 flex justify-center items-center"
        style="background-color: #f3edfd; width: 40px; height: 40px"
      >
        <font-awesome-icon :icon="iconName" class="text-dark" />
      </div>

      <!-- 텍스트 정보 -->
      <div class="flex-grow-1">
        <div class="small text-muted">{{ category }}</div>
        <div class="fw-semibold">{{ title }}</div>
        <div class="small text-secondary">{{ dateDisplay }}</div>
      </div>

      <!-- 금액 -->
      <div
        class="fw-semibold text-end"
        :class="isIncome ? 'text-primary' : 'text-danger'"
      >
        {{ amountDisplay }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  category: String,
  title: String,
  date: String,
  amount: Number,
  isIncome: Boolean,
});

const iconMap = {
  공과금: 'file-invoice-dollar',
  경조사비: 'gift',
  여비교통비: 'bus',
  식비: 'utensils',
  월급: 'money-bill-wave',
  여가비: 'gamepad',
  기타: 'ellipsis',
};

const iconName = computed(() => {
  return iconMap[props.category] || 'ellipsis';
});

const amountDisplay = computed(() => {
  return `${props.isIncome ? '+' : '-'}${props.amount?.toLocaleString() ?? 0}`;
});

const dateDisplay = computed(() => {
  if (!props.date) return '';

  const dateStr = props.date.toString(); // 예: '20250304'
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);

  return `${year}년 ${month}월 ${day}일`;
});
</script>
