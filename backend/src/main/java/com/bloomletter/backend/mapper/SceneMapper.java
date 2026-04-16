package com.bloomletter.backend.mapper;

import com.bloomletter.backend.entity.Scene;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface SceneMapper {
  List<Scene> findActiveScenes();
  List<Scene> findAllScenesWithProductCounts();
  Scene findActiveBySlug(@Param("slug") String slug);
  boolean existsById(@Param("id") Long id);
}

