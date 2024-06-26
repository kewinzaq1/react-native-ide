import { workspace } from "vscode";

export type LaunchConfigurationOptions = {
  appRoot: string | undefined;
  env: Record<string, string> | undefined;
  ios:
    | {
        scheme: string | undefined;
        configuration: string | undefined;
      }
    | undefined;
  android:
    | {
        variant: string | undefined;
      }
    | undefined;
  preview:
    | {
        waitForAppLaunch: boolean | undefined;
      }
    | undefined;
};

export function getLaunchConfiguration(): LaunchConfigurationOptions {
  return (
    workspace
      .getConfiguration("launch")
      ?.configurations?.find((config: any) => config.type === "react-native-ide") || {}
  );
}
