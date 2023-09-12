"use client";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import fetchReviews from "@/services/actions/fetchReviews";
import Loader from "@/components/ui/Loader";
import fetchStories from "@/services/actions/fetchStories";
import fetchPortfolio from "@/services/actions/fetchPortfolio";

const InfoProvider = ({ children }: { children: React.ReactNode }) => {
  const { reviews, status } = useAppSelector((state) => state.reviews);
  const { stories } = useAppSelector((state) => state.stories);
  const { portfolio } = useAppSelector((state) => state.portfolio);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchReviews());
      await dispatch(fetchStories());
      await dispatch(fetchPortfolio());
    };
    getData();
  }, [dispatch]);

  if (reviews && stories && portfolio) return <>{children}</>;

  return <Loader />;
};

export default InfoProvider;
