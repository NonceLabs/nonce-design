import React from 'react';
export default function RadioGroup<ItemT>({ options, renderOption, keyExtractor, labelExtractor, value, onChange, }: {
    value?: ItemT;
    options: ItemT[];
    renderOption?: ({ option }: {
        option: ItemT;
    }) => React.ReactElement | null;
    keyExtractor: (item: ItemT) => string | number;
    labelExtractor: (option: ItemT) => string;
    onChange: (value: ItemT | undefined) => void;
}): JSX.Element;
