import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;

  if (!fallbackCurrentYear) return null;

  return (
    <p {...useBlockProps.save()} style={{ fontSize: "16px" }}>
      © {showStartingYear && startingYear
        ? startingYear + "–" + fallbackCurrentYear
        : fallbackCurrentYear}
    </p>
  );
}
