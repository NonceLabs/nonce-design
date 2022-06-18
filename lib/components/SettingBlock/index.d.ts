import React from 'react';
interface SettingItem {
    icon?: React.ReactElement;
    title: string;
    value?: string | React.ReactElement;
    noChevron?: boolean;
    onPress: () => void;
}
export default function SettingBlock({ title, items, }: {
    title?: string;
    items: SettingItem[];
}): JSX.Element;
export {};
