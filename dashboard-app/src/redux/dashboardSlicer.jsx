import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "categories": [
      {
        "id": 1,
        "name": "CSPM Executive Dashboard",
        "widgets": [
          {
            "id": 1,
            "name": "Widget 1",
            "text": "This is a random text for Widget 1."
          },
          {
            "id": 2,
            "name": "Widget 2",
            "text": "This is a random text for Widget 2."
          }
        ]
      },
      {
        "id": 2,
        "name": "Security Overview",
        "widgets": [
          {
            "id": 3,
            "name": "Widget 3",
            "text": "This is a random text for Widget 3."
          }
        ]
      }
    ],
    searchQuery: ''
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget(state, action) {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    }
  }
});

export const { addWidget, removeWidget, setSearchQuery } = dashboardSlice.actions;

export const selectFilteredCategories = (state) => {
  const query = state.dashboard.searchQuery.toLowerCase();
  return state.dashboard.categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(query)
    )
  }));
};

export default dashboardSlice.reducer;
