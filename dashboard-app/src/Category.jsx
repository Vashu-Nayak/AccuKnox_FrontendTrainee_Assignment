import React from 'react';
import Widget from './Widget';
import AddWidgetForm from './WidgetForm';

const Category = ({ category }) => {
    return (
        <>
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.widgets.map(widget => (
                        <Widget key={widget.id} widget={widget} categoryId={category.id} />
                    ))}
                </div>
                {/* Add Button to Add Widget */}
                <div className="mt-4">

                    <AddWidgetForm categoryId={category.id} />
                </div>
            </div>
        </>
    );
};

export default Category;
