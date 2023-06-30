export declare module ICountrySelect {
    // eslint-disable-next-line no-unused-vars
    interface Props {
        value?: SelectValue;
        onChange: (value: SelectValue) => void;
    }

    interface SelectValue {
        flag: string;
        label: string;
        latlng: number[];
        regin: string;
        value: string;
    }
}
