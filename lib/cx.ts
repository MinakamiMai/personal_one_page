/** 极简 className 合并工具（无依赖，避免多装一个包） */
export function cx(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}
