import { ReactElement } from "react";

export default function YearsOfExperience({
    firstStartedYear,
}: {
    firstStartedYear: number;
}): ReactElement {
    const startedDate = new Date(firstStartedYear, 0, 1);

    const timeDelta = new Date(Date.now() - startedDate.getTime());

    const years = Math.floor(timeDelta.getFullYear() - 1970); // 1970 is the year of the Unix epoch

    return <>{years}</>;
}
